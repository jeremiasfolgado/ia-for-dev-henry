from fastapi import APIRouter, HTTPException
from typing import Dict
from models import Task, UpdateTaskModel, TaskList
from pydantic import ValidationError
from db import db

tasks_router = APIRouter()


@tasks_router.post("/", response_model=Task)

async def create_task(task: Task) -> Dict[str, int]:
    """
    Create a new task in the database.

    Args:
        task (Task): The task object to be added. It should be an instance of the Task Pydantic model,
                     containing the following fields:
                     - id (int, optional): The task ID. If not provided, it will be auto-generated.
                     - title (str): The task title.
                     - description (str, optional): The task description.
                     - completed (bool, optional): Whether the task is completed or not. Defaults to False.

    Returns:
        Dict[str, int]: A dictionary containing the ID of the newly created task.
                        Example: {"id": 1}

    Raises:
        HTTPException: If there is an error adding the task to the database.
        HTTPException: If the task object is invalid.
    """
    try:
        task_dict = task.model_dump()
    except ValidationError as e:
        raise HTTPException(status_code=422, detail=str(e))

    try:
        
        return db.add_task(task)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error adding task to database: {str(e)}")

@tasks_router.get("/{task_id}", response_model=Task)
async def get_task(task_id: int):
    """
    Get a task from the database by its ID.

    Args:
        task_id (int): The ID of the task to retrieve.

    Returns:
        The task with the specified ID, or None if the task is not found.

    Raises:
        HTTPException: If the task is not found.
"""
    task = db.get_task(task_id)
    if task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    return task


@tasks_router.get("/", response_model=TaskList)
async def get_tasks():
    """
    Get all tasks from the database.

    Returns:
        TaskList: A list of tasks.
"""
    tasks = db.get_tasks()
    return TaskList(tasks=tasks)


@tasks_router.put("/{task_id}", response_model=Task)
async def update_task(task_id: int, task_update: UpdateTaskModel):
    """
    Update a task in the database.

    Args:
        task_id (int): The ID of the task to be updated.
        task_update (UpdateTaskModel): The updated task data.

    Returns:
        The updated task.

    Raises:
        HTTPException: If the task is not found.
"""
    updated_task = db.update_task(task_id, task_update)
    if updated_task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    return updated_task


@tasks_router.delete("/{task_id}")
async def delete_task(task_id: int):
    """
    Delete a task from the database.

    Args:
        task_id (int): The ID of the task to be deleted.

    Returns:
        A dictionary with a success message.
"""
    db.delete_task(task_id)
    return {"message": "Task deleted successfully"}

@tasks_router.post("/clear")
async def clear_database():
    """
    Clear the entire database of tasks.

    Returns:
        A dictionary with a success message if the database was cleared successfully, or an error message if an exception occurred.
"""
    try:
        db.reset_tasks()
        return {"message": "Database cleared successfully"}
    except Exception as e:
        return {"error": str(e)}


import math
def es_primo(num):
      # If the num parameter is True or False it should throw an error.
    if num is None or isinstance(num, bool):
        raise TypeError("El parámetro num debe ser un número entero")
    
    if isinstance(num, float):
        if abs(num - round(num)) < 1e-9:
            num = round(num)

    # If the num parameter is not a number or is a boolean it should throw an error.
    if not isinstance(num, int):
        raise TypeError("El parámetro num debe ser un número entero")
  
    # If the num parameter is negative it should return False.
    if num < 2:
        return False
   
  # If the num parameter is a prime number it should return True.
    for i in range(2, int(math.sqrt(num)) + 1):
        if num % i == 0:
            return False
    return True

if __name__ == "__main__":
    print(es_primo(5))

   

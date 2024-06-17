import pytest

from func import es_primo

# correctly identifies small prime numbers
@pytest.mark.parametrize("num",[ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31])
def test_identifies_small_prime_numbers(num):
    result = es_primo(num)
    assert result == True, f"Error: {num} debería ser primo"

# correctly identifies large prime numbers
@pytest.mark.parametrize("num",[ 1000003,104743, 104743, 104743, 104743, 104743, 104743, 104743, 104743, 104743, 104743, 104743])
def test_identifies_large_prime_numbers(num):
    result = es_primo(num)
    assert result == True, f"Error: {num} debería ser primo"

# correctly identifies negative numbers as non prime numbers
@pytest.mark.parametrize("num",[-1, -2, -3, -4, -5, -6, -7, -8, -9, -10, -11])
def test_identifies_negative_numbers_as_non_prime_numbers(num):
    result = es_primo(num)
    assert result == False, f"Error: {num} no debería ser primo"

# correctly identifies non prime numbers
@pytest.mark.parametrize("num",[4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20])
def test_identifies_non_prime_numbers(num):
    result = es_primo(num)
    assert result == False, f"Error: {num} no debería ser primo"

# correctly identifies large non prime numbers
@pytest.mark.parametrize("num",[1000004, 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000])
def test_identifies_large_non_prime_numbers(num):
    result = es_primo(num)
    assert result == False, f"Error: {num} no debería ser primo"

# correctly error managment when the parameter is not a number sholud be throw TypeError
@pytest.mark.parametrize("num",["tres", True, False, 2.3, 3.9, None, [], {}])
def test_error_managment_when_the_parameter_is_not_a_number_sholud_be_throw_TypeError(num):
    with pytest.raises(TypeError):
        es_primo(num)

# correctly managment when the num parameter is primes floating point numbers that are extremely close to integer primes, such as 19.000000000000004 and 23.000000000000004, recognizing their primality.
@pytest.mark.parametrize("num",[19.000000000000004, 23.000000000000004])
def test_managment_when_the_num_parameter_is_primes_floating_point_numbers_that_are_extremely_close_to_integer_primes_such_as_19_000000000000004_and_23_000000000000004_recognizing_their_primality(num):
    result = es_primo(num)
    assert result == True, f"Error: {num} debería ser primo"
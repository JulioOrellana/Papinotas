
# Para recibir argumentos desde el terminal 
# balancedStrings = []
# ARGV.each do| bString |
#     balancedString << bString
# end

# Array of balanced strings, can be 0 to n
# balancedStrings = ['(()[]())', '((([])))','((((((())]',]

# if balancedStrings.empty?
#     puts "Sin elementos"
#     abort
# end


# @params char (character)
# @returns char
# Get the opposite char of input. If value is not listed, then default value is empty string.
def getOpposite(char)
    case char
    when '['
        93.chr("UTF-8")
    when ']'
        91.chr("UTF-8")
    when '('
        41.chr("UTF-8")
    when ')'
        40.chr("UTF-8")
    when '{'
        125.chr("UTF-8")
    when '}'
        123.chr("UTF-8")
    else
        ""
    end
end

# ASCII
# [ = 91 , ] = 93 
# ( = 40 , ) = 41
# { = 123 , } = 125


# @params input (String)
# @return nothing 
# Shows a message in console if value is correct or not
def balancedString(input)

    # If input is empty, abort execution
    if input.empty?
        puts "Incorrecto"
        abort
    end

    # If input is not even, means the string is not balanced
    if(input.length % 2 != 0)
        puts "No cumple #{input.length}"

    # If input is even
    else

        # Make an array of chars
        bStringChar = input.split('')
        
        # Default value
        iSCorrect = true
        
        # Iterate over the half of the array length
        (bStringChar.length/2).times do | number |

            # Evaluate the values of the extremes up to the inside
            # First we get the opposite from current position and then we evaluate if it is equal to the other side.
            if getOpposite(bStringChar[number]) != bStringChar[bStringChar.length - number - 1]
                iSCorrect = false
            end
        end

        if(iSCorrect)
            puts "es Correcto"
        else
            puts "es Incorrecto"
        end
    end
end

# Call value from console input
balancedString = $stdin.readline.strip.to_s

# Function to return noting but a message 
balancedString(balancedString)

# Para recibir argumentos desde el terminal 
# balancedStrings = []
# ARGV.each do| bString |
#     balancedString << bString
# end

# Array of balanced strings, can be 0 to n
balancedStrings = ['(()[]())', '((([])))','((((((())]',]

if balancedStrings.empty?
    puts "Sin elementos"
    abort
end

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

balancedStrings.each do | bString |
    if(bString.length % 2 != 0)
        puts "#{bString} -> No cumple"
    else
        bStringChar = bString.split('')
        
        iSCorrect = true
        
        (bStringChar.length/2).times do | number |
            if getOpposite(bStringChar[number]) != bStringChar[bStringChar.length - number - 1]
                iSCorrect = false
            end
        end
    end
    
    if(iSCorrect)
        puts "#{bString} -> es Correcto"
    else
        puts "#{bString} -> es Incorrecto"
    end
end
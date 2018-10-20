
# Para recibir argumentos desde el terminal 
# balancedStrings = []
# ARGV.each do| bString |
#     balancedString << bString
# end

# Array of balanced strings, can be 0 to n
balancedStrings = ['(()[]())']

if balancedStrings.empty?
    puts "Sin elementos"
    abort
end

balancedStrings.each do | bString |
    if(bString.length % 2 != 0)
        puts "#{bString} -> Incorrecto"
    else

    end

    
end

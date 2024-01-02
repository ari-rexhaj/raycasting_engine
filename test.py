#default state av listen, new_list vil falle tilbake til denne listen hvert loop
start_list = [1]

#old list lagrer den nyeste generete listen for pascal trekanten
old_list = start_list

#tar imot hvor mange ganger koden skal loope
antall_runder = int(input("Skriv hoyden du vil ha på pascals trekanten (int)\n>"))

#selve loopet, kjører for antall ganger brukeren inputet, jeg skal referere til denne loopen som omgang
for i in range(0,antall_runder):
    
    #her printer vi pascal trekanten, på første omgang er old_list = start_list = [1]
    print(old_list)
    
    #her reseter vi verdien til new_list samtidig som vi definerer den på første omgang
    new_list = start_list
    
    #her skjer magien. Vi looper for lengden av old_list - 1, altså på omgang 0 vil vi kjøre den 0 ganger, omgang 1 vil kjøre den 1 gang, osv. Dette gjør 2 ting for oss. 1, den første omgangen, som er den mest problematiske siden den har ikke nok verdien i listen til å lage neste mønster av trekanten, vil ikke kjøre. 2, når den første omgangen har kjørt vil denne loopen plusse et gitt element og elementet til venstre sammen og deretter appende resultatet. veldig simple og effektivt
    for j in range(0,len(old_list)-1):
        new_list.append(old_list[j-1]+old_list[j])

    #her appender vi 1, siden pascal trekanten alltid legger til en 1 på slutten av mønsteret for hver linje
    new_list.append(1)
    
    #her lagrer vi det generete mønsteret til old_list, og omgangen forsetter til neste... omgang? (loopen forsetter etter verdien er lagret)
    old_list = new_list
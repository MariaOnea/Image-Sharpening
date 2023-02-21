# Image-Sharpening
 Imaginea sursa este continuta intr-un JSON obtinut de la API DOG (https://
https://dog.ceo/dog-api/)
2. Componentele JSON-ului obtinut se afiseaza in browser
3. Imaginea din JSON se prelucreaza in canvas. Pentru prelucrarea imaginii exista
urmatoarele optiuni:
Optiunea 1: un mirror (astfel incat pixelii din dreapta sa ajunga in stanga si invers)
urmata de prelucrarea imaginii rezultate conform temei de procesare distribuita
sau
Optiunea 2: aplicarea prelucrarii pe jumatatea din stanga a imaginii urmata de
prelucrarea imaginii rezultate conform temei de procesare distribuita
4. Scrierea in canvas se face dupa un timp prestabilit prin utilizarea setTimeout.
5. Pentru procesare se folosesc doar algoritmi si/ sau secvente de cod low-level (nu se
accepta utilizarea de metode de procesare altele decat cele scrise in tema)
6. Codul sursa respecta “Coding standards”. Codul sursa este comentat
7. Preluarea JSON se face asincron (async, await)
8. Procesarea imaginii din canvas se face asincron impartind actiunea de procesare in 4
felii de executie (cu un timp intre ele de 1s)
Etapele de executie ale aplicatiei sunt:
- Afisare componente JSON in browser
- procesare imagine
- inregistrare timp de executie fiecare etapa
- afisare rezultate timp de procesare fiecare etapa 

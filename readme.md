react- library
react-dom => web k liye react dom 
react-native => agr mobile apps pr kaam krna h to react-native
command to create project => npx create-react-app 01basicreact
due to its bulkiness and taking more time its now replaced by another methods => vite or parcel 

cmmand => npm create vite@latest

jsx rule => el hi element return kr skte ho 
<> => fragment 

Vite mai Function ka name capital letter se start hone chahiye but y same cheez dusri command jo without vite h uspe  applicable nhi h

why hooks were introduced?
as we write any variable or print it its value remains constant but when there would be some change in variable it was not updated in UI
in that case, hooks were introduced to give that output in UI also => for this we use useStates from react

to clean cache:- npm cache clean --force

command to init tailwind => 

##onclick ko hmesha ek function chahiye na uski return value na parameter nhi pass kr skte function

<!-- Jo cheez variable hoti h change hoti rehti h uske liye hooks use krte hai means useState lgta hai wha -->

#Hooks

useState

useEffect 
syntax:-
useEffect(setup,dependencies?)

useContext

useCallback => cache memory me data store krlo jitne use krna h krlo 
syntax:- useCallback(fn, dependencies(in the form of array))

useRef => jb kisi b cheez ka mujhe reference lena hota hai tb y use hota hai

syntax:- useRef(initialValue)

 onChange={ () => {
              setAllowedCharacter((prev) => !prev);
            } }

            isme hum arrow function likhte h bcz age fn() => param ni pass kr skte second kyuki hum isme parameter access kr skte hain 

  tailwind commands:- npm install -D tailwindcss postcss autoprefixer
  
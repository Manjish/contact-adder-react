# Starting with React

## Project setup:

- Vite:
    - Vite is used to setup react project as it is faster than the traditional create-react-app
    - npm create vite@latest
    - Choose the framework as react
    - Choose the JS/TS
    - cd /project-path
    - npm install
    - npm run dev
    - The project is up and running

## React key topics:

- Folder structure:
    - node_modules: contains all the dependencies
    - public: contains all public assets
    - src: main folder where all code resides
    - package.json: dependencies and scripts
    - tsconfig.json: contains ts configurations
- Fragments:
    - <></>
    - <React.Fragment></React.Fragment>
    - jsx/tsx doesn’t allows multiple elements in return. So fragments in used to group them together. You can also use div
    - It doesn’t leave any trace in the browser html tree
- Dynamic content render:
    - enclosed in {}
    - example: {varName} → this will render what ever value is in varName
    - can be used to execute functions as well
    - example: {varName.toLocaleString()}
- Components:
    - Independent reusable block of codes
    - Better to create a folder in src. src→components→YourComponent.tsx
    - Used for DRY (Don’t Repeat Yourself)
    - Makes code readable
    - Props:
        - Properties
        - used to pass dynamic data to component to render them
        - example:
            
            The component:
            
            ```tsx
            const ComponentName = (props)=>{
            	return(
            	<>
            		<div className="randomName">
            		{props.data.name} //if object is passed use props.data else use props.fieldName
            		//example: props.name
            		</div>
            	</>	
            )
            }
            
            export default ComponentName
            ```
            
            Calling the component:
            
            ```tsx
            const App = ()=>{
            	const someArray=[{name:"A",name:"B",name:"C"}]
            	return (
            	<>
            		<ComponentName data={someArray[0]}/>
            		<ComponentName data={someArray[1]}/>
            		<ComponentName data={someArray[2]}/>
            		
            		//passing fieldwise:
            		//<ComponentName name="D"/>
            	</>
            	)
            }
            ```
            
- Adding CSS:
    - External:
        - Create a css file in styles folder. src→styles→yourCss.css
        - where required import using:
        import “./path-to-styles/yourCss.css”
    - Inline:
        - enclose css object in {}
        - example:
        
        ```tsx
        <div className="yourClass" style={{color:"red",background:"green",borderRadius:"10px"}}></div>
        //OR
        const yourStyle={color:"red",background:"green",borderRadius:"10px"}
        <div className="yourClass" style={yourStyle}></div>
        ```
        

## State Management:

- Event handling
    - onclick:
        - when a button or div is clicked, define what to do or what function to call
        - Example:
    
    ```tsx
    const ContactAdder = () => {
      const onClickHandler = () => {
        console.log("Clicked");
      };
    
      return (
        <>
          Contact Adder
          <button onClick={onClickHandler}>Click Me!</button>
        </>
      );
    };
    
    export default ContactAdder;
    ```
    
- State:
    - Object that holds data or information about the component and can change over time that can trigger the component to re-render.
    - useState:
        - used to define a state or a variable that changes in the run-time
        - defined using: const [variableName, setVariableName] = useState(”default value”);
        - changes where-ever the value is used
        - example:
        
        ```tsx
        import { useState } from "react";
        
        const ContactAdder = () => {
          const [name, setName] = useState("Manish");
        
          const onClickHandler = () => {
            setName("Manjish");
          };
        
          return (
            <>
              <div className="simpleAdder">
                Contact Adder
                <button onClick={onClickHandler}>Click Me!</button>
                <p>
                  My name is {name}. I live in{" "}
                  {name === "Manjish" ? "Bhaktapur" : "Kathmandu"}.
                </p>
              </div>
            </>
          );
        };
        
        export default ContactAdder;
        ```
        
    - dynamic component rendering:
        - Render component based on the state of an object
        - check which value is there in the state and change the component accordingly.
        - Example:
        In Persons.tsx:
        
        ```tsx
        export const Manjish = () => {
          return (
            <>
              <div style={{ background: "green", color: "white" }}>I am Manjish.</div>
            </>
          );
        };
        
        export const NotManjish = (props: { name: string }) => {
          return (
            <>
              <div style={{ background: "red", color: "white" }}>
                I am not Manjish.I am {props.name}
              </div>
            </>
          );
        };
        ```
        
        Then in ContactAdder.tsx:
        
        ```tsx
        import { useState } from "react";
        import { Manjish, NotManjish } from "./Persons";
        
        const ContactAdder = () => {
          const [name, setName] = useState("Manish");
        
          const onClickHandler = () => {
            setName("Manjish");
          };
        
          return (
            <>
              <div className="simpleAdder">
                Contact Adder
                <button onClick={onClickHandler}>Click Me!</button>
                <p>
                  My name is {name}.
                  {name === "Manjish" ? <Manjish /> : <NotManjish name={name} />}
                </p>
              </div>
            </>
          );
        };
        
        export default ContactAdder;
        ```
        
    - Getting input using state:
        - State can be used to get the input from the input fields as well
        - Example:
        
        ```tsx
        const GetInput=()=>{
        	const [name,setName]=useState("");
        
        	return (
        		<>
        			<input type="text"
        				placeholder="Name"
        				value={name}
        				onChange={(e)=>setName(e.target.value)}
        			/>
        		</>
        	)
        }
        ```
        
    - Mapping through data and rendering them:
        - As we displayed some data earlier manually, you must have noticed that the it is a bit hectic process. If we add a new element in the array, then me must add a code and pass the index to the component.
        - As a solution to this, we do rendering using map.
        - Example:
        
        ```tsx
        const App = ()=>{
        	const arrayOfData = [
        	{name:"A"},{name:"B"},{name:"C"},
        	]
        
        	return (
        	<>
        		<div className="someAwesomeClass">
        			{arrayOfData.map((e)=>(
        				<DynamicComponent data={e}/>
        			))}
        		</div>
        	</>
        	)
        }
        ```
        
    - Child to parent communication:
        - sending data from the component to parent component. Eg: rendered component to App component
        - using props:
        In child component:
        
        ```tsx
        const CustomComponent = (props)=>{
        	const onClickHandler = ()=>{
        		props.parentFunctionCall(someData);
        	}
        }
        ```
        
        In parent component:
        
        ```tsx
        const App = ()=>{
        	const parentFunc = (childData)=>{
        		console.log("Data from child",childData)
        	}
        
        	return (
        		<>
        			<ChildComponent parentFunctionCall={parentFunc}/>
        		</>
        	)
        }
        ```
        
        - updating data using useState for array elements:
        
        In parent component:
        
        ```tsx
        const App = () => {
          const initialContact = [
            {
              name: "Manjish",
              phone: "9860335974",
              address: "Bhaktapur",
            },
            {
              name: "Manish",
              phone: "9861213131",
              address: "Kathmandu",
            },
            {
              name: "Pradhan",
              phone: "9865331232",
              address: "Lalitpur",
            },
          ];
          const [contacts, setContacts] = useState(initialContact);
          const addContactData = (contactData) => {
            setContacts([...contacts, contactData]);
          };
        
          return (
            <>
              <div className="contact_adder">
                <ContactAdder onContactAdded={addContactData} />
              </div>
              <div className="contact_list">
                <h3>Contact list</h3>
                {contacts.map((e) => (
                  <Contact data={e} />
                ))}
              </div>
            </>
          );
        };
        ```
        
- Retaining data using LocalStorage:
    - LocalStorage is the storage available in the user’s browser that stores the data as the key-value pairs
    - the data persists even after the browser session ends until the localstorage is cleared manually or through the code
    - setting data in localStorage:
        
        ```tsx
        localStorage.setItem("key","value");
        ```
        
    - getting data from the localStorage:
        
        ```tsx
        const getData = localStorage.getItem("key");
        ```
        
    - removing a single key-value pair from the localStorage:
        
        ```tsx
        localStorage.removeItem("key");
        ```
        
    - removing all data or clearing the localStorage:
        
        ```tsx
        localStorage.clear();
        ```
        

## Styling:

- Adding google fonts:
    - Go to [Google Fonts](https://fonts.google.com/)
    - Select the desired font and size
    - Get the embedded link and add it in the head tag of index.html
    - In css define the font-family where required
    - The font is changed ✅
- Adding data validations:
    - Ensure that all fields are filled else show error (used span and triggered the condition based on the field length)
    - Hide errors once the data is submitted

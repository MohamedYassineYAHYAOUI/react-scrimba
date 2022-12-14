// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                     <li className="nav-item active">
//                         <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="#">Link</a>
//                     </li>
//                     <li className="nav-item dropdown">
//                         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="trye">
//                         Dropdown
//                         </a>
//                             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                                 <a className="dropdown-item" href="#">Action</a>
//                                 <a className="dropdown-item" href="#">Another action</a>
//                                 <div className="dropdown-divider"></div>
//                                 <a className="dropdown-item" href="#">Something else here</a>
//                             </div>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link disabled" href="#">Disabled</a>
//                     </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
// }

// function MainContent(){
//     return(
//         <h1> react Main Content component  </h1>
//     )
// }

// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple
// h1 element that says "I'm learning React!"

// Afterward, render it below the Navbar (which
// you can do inside the ReactDOM.render call below)


// in vanilla JS : 
// const container = document.getElementById("root")
// const elementH1 = document.createElement('h1');
// elementH1.textContent = "hello vanillaJs";
// elementH1.className = "header";
// container.appendChild(elementH1);

// const rootContainer = ReactDOM.createRoot(document.getElementById("root"))

// rootContainer.render(<div>
//     <Navbar></Navbar>
//     <MainContent></MainContent>
// </div>)



/*
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/
function NavBar(){
    return (
        <nav>
            <h1> web Site Name</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}



const container = ReactDOM.createRoot(document.getElementById("root"))

container.render(
    <NavBar/>
)
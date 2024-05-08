
function customRender(reactElement,container){
    /* // This is Method - 1 
    const domElement = document.createElement(reactElement.type) //domElement = a
    
    domElement.innerHTML = reactElement.children 
    // <a>Click me to visit google </a> (childer from reactElement)
    
    domElement.setAttribute('href',reactElement.props.href)
    // <a href ="..."> --> it add from reactElement.props

    domElement.setAttribute('target',reactElement.props.target)
    // <a href="" target="_blank"> --> it add the target attribute and its value

    container.appendChild(domElement)// it display the container
    */

    // This is Method - 2

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}


const reactElement = {
    type : 'a',
    props: {
        href : 'https://google.com',
        target:'_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector("#root")

customRender(reactElement,mainContainer)
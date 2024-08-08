// function customRender(reactElement, container) {
//     const domElement = document.createElement
//     (reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href', reactElement.props.href)
//     domElement.setAttribute('target', reactElement.props.target)

//     container.appendChild(domElement)
// }

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'http://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }

// const mainContainer = document.querySelector('#root')
// customRender(reactElement,  mainContainer)


// new function

function customReact(newElement, container) {
    /*const domElement = document.createElement
    (newElement.type)
    domElement.innerHTML = newElement.children
    domElement.setAttribute('href', newElement.props.href)
    domElement.setAttribute('target', newElement.props.target)

    container.appendChild(domElement) */

    const domElement = document.createElement(newElement.type)
    domElement.innerHTML = newElement.children
    for(const prop in props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, newElement.props
            [prop])
    }
    container.appendChild(domElement)
}

const newElement = {
    type: 'a',
    props: {
        href: "https://chatgpt.com/",
        target: "_blank",
    },
    children: "Click to open chatgpt",
}

const container = document.querySelector('#newroot')

customReact(newElement, container)
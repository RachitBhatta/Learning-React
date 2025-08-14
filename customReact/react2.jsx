function customrender(React,Main){
    // const element=document.createElement(React.type);
    // element.innerHTML=React.childern;
    // element.setAttribute('href',React.props.href);
    // element.setAttribute('target',React.props.target);
    // Main.appendChild(element);
    const el=document.createElement(React.type);
    el.innerHTML=React.children;
    for(const prop in React.props){
        if (prop==='children') continue;
        el.setAttribute(prop,React.props[prop]);

    };
    Main.appendChild(el);

}

const React={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'


    },
    children:'Click ME'


}
const Main=document.querySelector(".root");
customrender(React,Main)


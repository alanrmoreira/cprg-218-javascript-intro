const handleSwitch = () => {

    let lightbulb = document.getElementById('lightbulb');
    let mySwitch = document.getElementById('switch');

    switch (lightbulb.getAttribute('class')) {

        case 'on':
            //lightbulb
            lightbulb.setAttribute('src', 'lightbulb_off.webp');
            lightbulb.setAttribute('class', 'off');
            //light switch
            mySwitch.setAttribute('class', 'off');
            mySwitch.setAttribute('src', 'off.png');
            //documenti body
            document.body.style.backgroundColor = "#000";

            break;

        default:
            //lightbulb
            lightbulb.setAttribute('src', 'lightbulb_on.webp');
            lightbulb.setAttribute('class', 'on');
            //light switch
            mySwitch.setAttribute('class', 'on');
            mySwitch.setAttribute('src', 'on.png');
            //documenti body
            document.body.style.backgroundColor = "#fff";
            break
    }
}
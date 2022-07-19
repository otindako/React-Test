let darkmode = localStorage.getItem("darkmode")
const head = document.getElementById("head")
console.log()

// When page loads
function loadTheme(){
    if (JSON.parse(darkmode)){
        getTheme(1)
    }
}


// Dark mode
function getTheme(theme) {
    let root = document.documentElement;
    if (theme === 0) {

        root.style.setProperty('--primary-color', '#ffffff');
        root.style.setProperty('--secondary-color', '#f2f2f6');
        root.style.setProperty('--text-color', 'rgb(44, 44, 44)');
        root.style.setProperty('--primary-accent-color', '#007aff'); 
        root.style.setProperty('--secondary-accent-color', '#35c759');
        head.content = "#f8f8f8d5"
        localStorage.setItem("darkmode", "0")

    
    } else if (theme === 1) {

        root.style.setProperty('--primary-color', '#1c1c1e');
        root.style.setProperty('--secondary-color', '#000000');
        root.style.setProperty('--text-color', 'rgb(199, 199, 199)');
        root.style.setProperty('--primary-accent-color', '#0b84fe');
        root.style.setProperty('--secondary-accent-color', '#2ed158'); 
        head.content = "#252525ee"
        localStorage.setItem("darkmode", "1")

    
    }
}
function toggleTheme(){
    darkmode = localStorage.getItem("darkmode")
    if (JSON.parse(darkmode) !== 1){
        getTheme(1)
    } else if (JSON.parse(darkmode) !== 0){
        getTheme(0)
    }
}


export { loadTheme, toggleTheme }
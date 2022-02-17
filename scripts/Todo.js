export function Todos(text){
    this.id = 0;
    this.isChecked = false;
    this.text = text;
    this.date = new Date().toLocaleDateString();
}
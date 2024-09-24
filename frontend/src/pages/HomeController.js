export const HomeController = {
    controller: function() {
        this.title = "Prueba"
    },
    render: function() {
        return `${this.title}`;
    }
};
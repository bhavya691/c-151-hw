AFRAME.registerComponent("rotate", {
    schema:{
        rotateY:{type: "number", default:1}
    },
    tick: function(){
        this.data.rotateY += 2;
        var rotate = this.el.getAttribute("rotation")
        rotate.y = this.data.rotateY;
        this.el.setAttribute("rotation", {
            x:rotate.x,
            y:rotate.y,
            z:rotate.z
        })
    }
})
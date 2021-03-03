const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150
        }
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum : 10,
            message : "Must be at least 10 numbers"
        }
    },
   
}

const app = ({
    data() {
        return {
            about: 'Youtuber 📷',
            image: './images/picture.jpg',
            follow: 'https://www.youtube.com/channel/UCkvom4uMCtwaziIfAOthUiQ',
            chat: 'https://www.facebook.com/Pungpee.wns/',
            errors: null,
            firstname: null,
            lastname: null,
            age: null,
            email: null,
            tellHer: []
            
        }
    },
methods: {
    checkForm() {
        this.errors = validate({firstname: this.firstname,
                                lastname: this.lastname,
                                age: this.age,
                                email: this.email,
                                phone: this.phone},
                                constraints)
            if(this.firstname && this.lastname && this.age && this.email && this.phone){
                alert("Your profile is updated successfully")
            }
    }
}
})




mountedApp = Vue.createApp(app).mount('#app')
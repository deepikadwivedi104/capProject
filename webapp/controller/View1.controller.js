sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("bidmatrix.controller.View1", {
        onInit() {

            const oData = {
                showTable: false,
                students: [

                    {
                        studentId: "ST101",
                        name: "Rahul Sharma",
                        department: "Computer Science",
                        email: "rahul@gmail.com",
                        city: "Delhi"
                    },

                    {
                        studentId: "ST102",
                        name: "Vikas Tiwari",
                        department: "Electronics",
                        email: "vikas@gmail.com",
                        city: "Mumbai"
                    },

                    {
                        studentId: "ST103",
                        name: "Aman Singh",
                        department: "Mechanical",
                        email: "aman@gmail.com",
                        city: "Pune"
                    },

                    {
                        studentId: "ST104",
                        name: "Sneha Kapoor",
                        department: "Civil",
                        email: "sneha@gmail.com",
                        city: "Bangalore"
                    },

                    {
                        studentId: "ST105",
                        name: "Arjun Mehta",
                        department: "IT",
                        email: "arjun@gmail.com",
                        city: "Hyderabad"
                    }

                ]

            };

            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

        },
        onLoadTemplate() {

            this.getView()
                .getModel()
                .setProperty("/showTable", true);

        }

    });
});

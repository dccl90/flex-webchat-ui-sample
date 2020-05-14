var appConfig = {
    //  change the your AccountSid
    accountSid: "AC111aa620e695e688aad5dddf35c96197",
    // change to your Flex Flow SID
    flexFlowSid: "FO0c697ea84f0af1c7ae27a3621640525a",
    startEngagementOnInit: false,

    logLevel: 'debug',

    colorTheme: {
        overrides: brandedColors
    },
    context: {
        friendlyName: "Maximilian Andreas Harald",
    },

    componentProps: {
        MessagingCanvas: {
            charLimit: 20
        },
        MessageInput: {
            charLimit: 20,
            MessageInputArea: {
                charLimit: 20
            }
        },
           EntryPoint: {
            borderRadius: 50
        }
    },

  


    // preEngagementConfig: {
    //      description: "Please provide some information",
    //     fields: [
    //         {
    //             label: "What is your name?",
    //             type: "InputItem",
    //             attributes: {
    //                 name: "friendlyName",
    //                 type: "text",
    //                 required: true
    //             }
    //         },
    //         {
    //             label: "What is your question?",
    //             type: "TextareaItem",
    //             attributes: {
    //                 name: "storeLocation",
    //                 type: "text",
    //                 placeholder: "Store Location?",
    //                 required: false,
    //                 rows: 5
    //             }
    //         }, 
    //     ],
    //     submitLabel: "Ok Let's Go!"
    // }
    preEngagementConfig: {    

    description: "Please provide some information",
    fields: [
        {
            label: "What is your location",
            type: "SelectItem",
            attributes: {
                name: "customerLocation",
                required: true,
                readOnly: false,
                onchange: console.log("Ola")
            },
            options : [
                {
                    value: "Melbourne",
                    label: "Melbourne",
                    selected: false
                },
                {
                    value: "Sydney",
                    label: "Sydney",
                    selected: false
                }
            ]

        },
       {
            label: "What is your email address?",
            type: "InputItem",
            attributes: {
                name: "email",
                type: "text",
                required: true
            }
        }, 
    ],
  submitLabel: "Ok Let's Go!",
 }

}
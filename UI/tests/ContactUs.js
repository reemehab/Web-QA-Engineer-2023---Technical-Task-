module.exports ={
    beforeEach : (browser) =>{
    browser.url("http://automationpractice.multiformis.com/index.php?controller=contact")
    //browser.url("http://automationpractice.multiformis.com/index.php")
   // .waitForElementVisible('a[title="Contact us"]', 5000)
   // .click('a[title="Contact us"]')
    .pause(2000)},

 /*   "all the fields are empty" : (browser) =>{
        browser.waitForElementVisible('button#submitMessage', 5000)  
        .click('button#submitMessage')
        .assert.containsText('.alert.alert-danger p', 'There is 1 error')
        .assert.containsText('.alert.alert-danger li', 'Invalid email address.')
        .end();
        },

    "Entering an email only" :(browser) =>{
        browser.setValue('input#email', 'reem@gmail.com')
        .waitForElementVisible('button#submitMessage', 5000)  
        .pause(2000)
        .click('button#submitMessage')
        .assert.containsText('.alert.alert-danger p', 'There is 1 error')
        .assert.containsText('.alert.alert-danger li', 'The message cannot be blank.')
        .end();
        },
        
    "Entering Order reference only" :(browser) =>{
        browser.setValue('input#id_order', '1359')
        .waitForElementVisible('button#submitMessage', 5000)  
        .click('button#submitMessage')
        .assert.containsText('.alert.alert-danger p', 'There is 1 error')
        .assert.containsText('.alert.alert-danger li', 'Invalid email address.')
        .end();
    },
        
    "Entering Subject Heading only" :(browser) =>{
        browser
         .assert.containsText('#uniform-id_contact > span', '-- Choose --')
         .click("#id_contact option[value='1']")
         .assert.containsText('#uniform-id_contact > span', 'Webmaster')
         .click('button#submitMessage')
         .assert.containsText('.alert.alert-danger p', 'There is 1 error')
         .assert.containsText('.alert.alert-danger li', 'Invalid email address.')
         .end();
     },
    "attaching a file only" :(browser) =>{
    const filePath = 'D:\\siemens\\test.txt';
    browser.setValue('input[type="file"]', filePath)  
    .pause(2000)  
    .assert.containsText('span.filename', 'test.txt')  
    .waitForElementVisible('button#submitMessage', 5000)  
    .click('button#submitMessage')
    .assert.containsText('.alert.alert-danger p', 'There is 1 error')
    .assert.containsText('.alert.alert-danger li', 'Invalid email address.')
    .assert.containsText('span.filename', 'No file selected') 
    .end
    },
        
    "Entering a message only" :(browser) =>{
         browser.setValue('#message', 'i am writimg a test message containg numbers ans special chars 1234, &^%&')
        .waitForElementVisible('button#submitMessage', 5000)  
        .click('button#submitMessage')
        .assert.containsText('.alert.alert-danger p', 'There is 1 error')
        .assert.containsText('.alert.alert-danger li', 'Invalid email address.')
        .end();
    },
    
    "Entering an email and subject heading only" :(browser) =>{
        browser.setValue('input#email', 'reem@gmail.com')
        .waitForElementVisible('button#submitMessage', 5000)  
        .pause(2000)
        .assert.containsText('#uniform-id_contact > span', '-- Choose --')
        .click("#id_contact option[value='1']")
        .assert.containsText('#uniform-id_contact > span', 'Webmaster')
        .click('button#submitMessage')
        .assert.containsText('.alert.alert-danger p', 'There is 1 error')
        .assert.containsText('.alert.alert-danger li', 'The message cannot be blank.')
        .end();
    },

    "Entering an email and Order reference only" :(browser) =>{ 
        browser.setValue('input#email', 'reem@gmail.com')
        .setValue('input#id_order', '1359')
        .pause(2000)
        .click('button#submitMessage')
        .assert.containsText('.alert.alert-danger p', 'There is 1 error')
        .assert.containsText('.alert.alert-danger li', 'The message cannot be blank.')
        .end();
    },

    "Entering an email and attaching a file only" :(browser) =>{
    const filePath = 'D:\\siemens\\test.txt';
    browser.setValue('input#email', 'reem@gmail.com')
    .setValue('input[type="file"]', filePath)  
    .pause(2000)  
    .assert.containsText('span.filename', 'test.txt')  
    .waitForElementVisible('button#submitMessage', 5000)  
    .click('button#submitMessage')
    .assert.containsText('.alert.alert-danger p', 'There is 1 error')
    .assert.containsText('.alert.alert-danger li', 'The message cannot be blank.')
    .assert.containsText('span.filename', 'No file selected')
    .end(); 
    }, 

    "Entering an email and a message  only" :(browser) =>{
    browser.setValue('input#email', 'reem@gmail.com')
    .setValue('#message', 'i am writimg a test message containg numbers ans special chars 1234, &^%&')
    .waitForElementVisible('button#submitMessage', 5000)  
    .click('button#submitMessage')
    .assert.containsText('.alert.alert-danger p', 'There is 1 error')
    .assert.containsText('.alert.alert-danger li', 'Please select a subject from the list provided.')
    .end();
    },
    
    "Entering a subject heading and order refrence only" :(browser) =>{
        browser.assert.containsText('#uniform-id_contact > span', '-- Choose --')
        .click("#id_contact option[value='1']")
        .assert.containsText('#uniform-id_contact > span', 'Webmaster')
        .setValue('input#id_order', '1359')
        .click('button#submitMessage')
        .assert.containsText('.alert.alert-danger p', 'There is 1 error')
        .assert.containsText('.alert.alert-danger li', 'Invalid email address.')
        .end();
    },
    
    "Entering a subject heading and attaching a file only" :(browser) =>{
        const filePath = 'D:\\siemens\\test.txt';
        browser.assert.containsText('#uniform-id_contact > span', '-- Choose --')
        .click("#id_contact option[value='1']")
        .assert.containsText('#uniform-id_contact > span', 'Webmaster')
        .setValue('input[type="file"]', filePath)  
        .pause(2000)  
        .assert.containsText('span.filename', 'test.txt')  
        .click('button#submitMessage')
        .assert.containsText('.alert.alert-danger p', 'There is 1 error')
        .assert.containsText('.alert.alert-danger li', 'Invalid email address.')
        .assert.containsText('span.filename', 'No file selected')
        .end();

    },
    
    "Entering a subject heading and a message only" :(browser) =>{
    browser.assert.containsText('#uniform-id_contact > span', '-- Choose --')
    .click("#id_contact option[value='1']")
    .assert.containsText('#uniform-id_contact > span', 'Webmaster')
    .setValue('#message', 'i am writimg a test message containg numbers ans special chars 1234, &^%&')
    .click('button#submitMessage')
    .assert.containsText('.alert.alert-danger p', 'There is 1 error')
    .assert.containsText('.alert.alert-danger li', 'Invalid email address.')
    .assert.containsText('span.filename', 'No file selected')
    .end();
    },
   
    "Entering an order refrence and attaching a file only" :(browser) =>{
    const filePath = 'D:\\siemens\\test.txt';
    browser.setValue('input#id_order', '1359')
    .setValue('input[type="file"]', filePath)  
    .pause(2000)  
    .assert.containsText('span.filename', 'test.txt')  
    .click('button#submitMessage')
    .assert.containsText('.alert.alert-danger p', 'There is 1 error')
    .assert.containsText('.alert.alert-danger li', 'Invalid email address.')
    .assert.containsText('span.filename', 'No file selected')
    .end();

    },
    
    "Entering an order refrence and a message only" :(browser) =>
    {browser.setValue('input#id_order', '1359')
    .setValue('#message', 'i am writimg a test message containg numbers ans special chars 1234, &^%&')
    .click('button#submitMessage')
    .assert.containsText('.alert.alert-danger p', 'There is 1 error')
    .assert.containsText('.alert.alert-danger li', 'Invalid email address.')
    .end();
   
},
    
    "attaching a file and a message only" :(browser) =>{
    const filePath = 'D:\\siemens\\test.txt';
    browser.setValue('input[type="file"]', filePath)  
    .pause(2000)  
    .assert.containsText('span.filename', 'test.txt')  
    .setValue('#message', 'i am writimg a test message containg numbers ans special chars 1234, &^%&')
    .click('button#submitMessage')
    .assert.containsText('.alert.alert-danger p', 'There is 1 error')
    .assert.containsText('.alert.alert-danger li', 'Invalid email address.')
    .assert.containsText('span.filename', 'No file selected')
    .end();
    }, 
    
    "subject heading & Email address & order refrence" :(browser) =>{
        browser
        .assert.containsText('#uniform-id_contact > span', '-- Choose --')
        .click("#id_contact option[value='1']")
        .assert.containsText('#uniform-id_contact > span', 'Webmaster')
        .setValue('input#email', 'reem@gmail.com')
        .setValue('input#id_order', '1359')
        .click('button#submitMessage')
        .assert.containsText('.alert.alert-danger p', 'There is 1 error')
        .assert.containsText('.alert.alert-danger li', 'The message cannot be blank.')
        .end();
    }, 
    
    "subject heading & Email address & attach file" :(browser) =>{
        const filePath = 'D:\\siemens\\test.txt';
        browser.assert.containsText('#uniform-id_contact > span', '-- Choose --')
        .click("#id_contact option[value='1']")
        .assert.containsText('#uniform-id_contact > span', 'Webmaster')
        .setValue('input#email', 'reem@gmail.com')
        .setValue('input[type="file"]', filePath)  
        .pause(2000)  
        .assert.containsText('span.filename', 'test.txt')  
        .click('button#submitMessage')
        .assert.containsText('.alert.alert-danger p', 'There is 1 error')
        .assert.containsText('.alert.alert-danger li', 'The message cannot be blank.')
        .assert.containsText('span.filename', 'No file selected')
        .end();
    },     
    
    "subject heading & Email address & message" :(browser) =>{
        browser
        .assert.containsText('#uniform-id_contact > span', '-- Choose --')
        .click("#id_contact option[value='1']")
        .assert.containsText('#uniform-id_contact > span', 'Webmaster')
        .setValue('input#email', 'reem@gmail.com')
        .setValue('#message', 'i am writimg a test message containg numbers ans special chars 1234, &^%&')
        .click('button#submitMessage')
        .waitForElementVisible('p.alert.alert-success', 5000)  
        .assert.containsText('p.alert.alert-success', 'Your message has been successfully sent to our team.')
        .end();
    }, 
    
    "subject heading & order refrence & attach file" :(browser) =>{
        const filePath = 'D:\\siemens\\test.txt';
        browser
        .assert.containsText('#uniform-id_contact > span', '-- Choose --')
        .click("#id_contact option[value='1']")
        .assert.containsText('#uniform-id_contact > span', 'Webmaster')
        .setValue('input#id_order', '1359')
        .setValue('input[type="file"]', filePath)  
        .pause(2000)  
        .assert.containsText('span.filename', 'test.txt')  
        .click('button#submitMessage')
        .assert.containsText('.alert.alert-danger p', 'There is 1 error')
        .assert.containsText('.alert.alert-danger li', 'Invalid email address.')
        .assert.containsText('span.filename', 'No file selected')
        .end();
    },

    "subject heading & order refrence &  message" :(browser) =>{
        browser.assert.containsText('#uniform-id_contact > span', '-- Choose --')
        .click("#id_contact option[value='1']")
        .assert.containsText('#uniform-id_contact > span', 'Webmaster')
        .setValue('input#id_order', '1359')
        .setValue('#message', 'i am writimg a test message containg numbers ans special chars 1234, &^%&')
        .click('button#submitMessage')
        .assert.containsText('.alert.alert-danger p', 'There is 1 error')
        .assert.containsText('.alert.alert-danger li', 'Invalid email address.')
        .end();
    }, 
    
    "subject heading & attach file &  message" :(browser) =>{
        const filePath = 'D:\\siemens\\test.txt';
        browser.assert.containsText('#uniform-id_contact > span', '-- Choose --')
        .click("#id_contact option[value='1']")
        .assert.containsText('#uniform-id_contact > span', 'Webmaster')
        .setValue('input[type="file"]', filePath)  
        .pause(2000)  
        .assert.containsText('span.filename', 'test.txt')  
        .setValue('#message', 'i am writimg a test message containg numbers ans special chars 1234, &^%&')
        .click('button#submitMessage')
        .assert.containsText('.alert.alert-danger p', 'There is 1 error')
        .assert.containsText('.alert.alert-danger li', 'Invalid email address.')
        .assert.containsText('span.filename', 'No file selected')
        .end();

    }, 
    
    "email & order & attach a file" :(browser) =>{
        const filePath = 'D:\\siemens\\test.txt';
        browser.setValue('input#email', 'reem@gmail.com')
        .setValue('input#id_order', '1359')
        .setValue('input[type="file"]', filePath)  
        .pause(2000)  
        .assert.containsText('span.filename', 'test.txt')  
        .click('button#submitMessage')
        .assert.containsText('.alert.alert-danger p', 'There is 1 error')
        .assert.containsText('.alert.alert-danger li', 'The message cannot be blank.')
        .assert.containsText('span.filename', 'No file selected')
        .end();
    }, 
   
    "email & order & message" :(browser) =>{
        browser.setValue('input#email', 'reem@gmail.com')
        .setValue('input#id_order', '1359')
        .setValue('#message', 'i am writimg a test message containg numbers ans special chars 1234, &^%&')
        .click('button#submitMessage')
        .assert.containsText('.alert.alert-danger p', 'There is 1 error')
        .assert.containsText('.alert.alert-danger li', 'Please select a subject from the list provided.')
        .assert.containsText('span.filename', 'No file selected')
        .end();
    },  
    
    "order & attaching a file & message" :(browser) =>{
        const filePath = 'D:\\siemens\\test.txt';
        browser.setValue('input#id_order', '1359')
        .setValue('input[type="file"]', filePath)  
        .pause(2000)  
        .assert.containsText('span.filename', 'test.txt')  
        .setValue('#message', 'i am writimg a test message containg numbers ans special chars 1234, &^%&')
        .click('button#submitMessage')
        .assert.containsText('.alert.alert-danger p', 'There is 1 error')
        .assert.containsText('.alert.alert-danger li', 'Invalid email address.')
        .assert.containsText('span.filename', 'No file selected')
        .end();
    },   

"Filling All the fields with valid data" :(browser) =>{
    const filePath = 'D:\\siemens\\test.txt';
    browser.assert.containsText('#uniform-id_contact > span', '-- Choose --')
    .click("#id_contact option[value='1']")  //subject heading
    .assert.containsText('#uniform-id_contact > span', 'Webmaster')
    .setValue('input#email', 'reem@gmail.com') //valid email
    .setValue('input#id_order', '1359') //order
    .setValue('input[type="file"]', filePath) //file
    .pause(2000)  
    .assert.containsText('span.filename', 'test.txt')  
    .setValue('#message', 'i am writimg a test message containg numbers ans special chars 1234, &^%&')
    .click('button#submitMessage')
    .waitForElementVisible('p.alert.alert-success', 5000)  
    .assert.containsText('p.alert.alert-success', 'Your message has been successfully sent to our team.')  
    .end();
},   
"Filling All the fields with invalid data" :(browser) =>{
    const filePath = 'D:\\siemens\\test.txt';
    browser.assert.containsText('#uniform-id_contact > span', '-- Choose --')
    .click("#id_contact option[value='1']")  //subject heading
    .assert.containsText('#uniform-id_contact > span', 'Webmaster')
    .setValue('input#email', 'reem@') //invalid email
    .setValue('input#id_order', '1359') //order
    .setValue('input[type="file"]', filePath) //file
    .pause(2000)  
    .assert.containsText('span.filename', 'test.txt')  
    .setValue('#message', 'i am writimg a test message containg numbers ans special chars 1234, &^%&')
    .click('button#submitMessage')
    .assert.containsText('.alert.alert-danger p', 'There is 1 error')
    .assert.containsText('.alert.alert-danger li', 'Invalid email address.')
    .assert.containsText('span.filename', 'No file selected')
     .end();} */
};

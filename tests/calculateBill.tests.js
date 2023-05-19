describe('Test my calculateBill function' , function(){
    it("Write a function that allows users to add a bill item type of 'call' or 'sms' into a text box. When the 'Add' button is pressed the right value need to be added to the overall total.", function(){
       
       
        assert.deepEqual(5.00, calculateBtnClicked("sms, sms, call, sms"));

        
    });

    it("Write a function that allows users to add a bill item type of 'call' or 'sms' into a text box. When the 'Add' button is pressed the right value need to be added to the overall total.", function(){
       
       
        assert.deepEqual(10.00, calculateBtnClicked("sms, sms, call, sms, sms, sms, call, sms"));

        
    });

    it("Write a function that allows users to add a bill item type of 'call' or 'sms' into a text box. When the 'Add' button is pressed the right value need to be added to the overall total.", function(){
       
       
        assert.deepEqual(15.00, calculateBtnClicked("sms, sms, call, sms, sms, sms, call, sms, sms, sms, call, sms"));

        
    });

    
}); 
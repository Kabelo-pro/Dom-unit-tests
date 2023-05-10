describe('Test my settingsBill function' , function(){
    it("Write a function that allows users to set call cost", function(){
        let settingsBill = BillWithSettings();
        settingsBill.setCallCost(1.85);    
        assert.equal(1.85, settingsBill.getCallCost());


        let settingsBill2 = BillWithSettings();
        settingsBill2.setCallCost(2.75);    
        assert.equal(2.75, settingsBill2.getCallCost());

    });

    it("Write a function that allows users to set sms cost", function(){
        let settingsBill = BillWithSettings();
        settingsBill.setSmsCost(0.85);    
        assert.equal(0.85, settingsBill.getSmsCost());


        let settingsBill2 = BillWithSettings();
        settingsBill2.setSmsCost(0.75);    
        assert.equal(0.75, settingsBill2.getSmsCost());

    });

    it("Write a function that allows users to set sms and call cost", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.75);  
        settingsBill.setSmsCost(0.85);
          
        assert.equal(0.85, settingsBill.getSmsCost());
        assert.equal(2.75, settingsBill.getCallCost());

        let settingsBill2 = BillWithSettings();

        settingsBill2.setCallCost(1.75);
        settingsBill2.setSmsCost(0.65);

        assert.equal(0.65, settingsBill2.getSmsCost());
        assert.equal(1.75, settingsBill2.getCallCost());



    });   
    
    it("Write a function that allows users to set the warning level", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setWarningLevel(20)
          
        assert.equal(20, settingsBill.getWarningLevel());
        

    

    });   

    it("Write a function that allows users to set the critical level", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(30);
          
        assert.equal(30, settingsBill.getCriticalLevel());
        

         



    });   
    

}); 
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
    

    it("Write a function that allows users to set the critical level", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(30);
          
        assert.equal(30, settingsBill.getCriticalLevel());
        
    });
    
    it("Write a function that allows users to set the warning & critical level", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setWarningLevel(15);
        settingsBill.setCriticalLevel(25);    
          
        assert.equal(15, settingsBill.getWarningLevel());
        assert.equal(25, settingsBill.getCriticalLevel());

        
    });  

    describe('Test my settingsBill function' , function(){
        it("Write a function that allows users to use the call cost set", function(){
            let settingsBill = BillWithSettings();

            settingsBill.setCallCost(2.25);  
            settingsBill.setSmsCost(0.85);

            settingsBill.makeCall();

            assert.equal(6.75, settingsBill.getTotalCost());
            assert.equal(6.75, settingsBill.getTotalCallCost());
            assert.equal(0.00, settingsBill.getTotalSmsCost());
    
        });

        it("Write a function that allows users to set for 2 calls at 1.35 each", function(){
            let settingsBill = BillWithSettings();

            settingsBill.setCallCost(1.25);  
            settingsBill.setSmsCost(0.85);

            settingsBill.makeCall();
            settingsBill.makeCall();

            assert.equal(2.70, settingsBill.getTotalCost());
            assert.equal(2.70, settingsBill.getTotalCallCost());
            assert.equal(0.00, settingsBill.getTotalSmsCost());
    
        });

    });    
}); 
describe('Test my calculateBill function' , function(){
    it("Write a function that allows users to add a bill item type of 'call' or 'sms' into a text box. When the 'Add' button is pressed the right value need to be added to the overall total.", function(){
       
       
        assert.deepEqual(5, calculateBtnClicked("sms, sms, call, sms"));

        
    });

    // it("Write a function called allFromTown that takes a string parameter with registration numbers separated with commas and the registration number start string. It should return all the registration numbers in the string that is for that town.", function(){
    //   assert.deepEqual(['CL 124', 'CL 345', 'CL 341'], allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));

      
    // });
    // it("Write a function called allFromTown that takes a string parameter with registration numbers separated with commas and the registration number start string. It should return all the registration numbers in the string that is for that town.", function(){
    //   assert.deepEqual(['CL 124', 'CL 345', 'CL 341'], allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));

      
    // });
    // it("Write a function called allFromTown that takes a string parameter with registration numbers separated with commas and the registration number start string. It should return all the registration numbers in the string that is for that town.", function(){
    //   assert.deepEqual(['CL 124', 'CL 345', 'CL 341'], allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
      
    // });
}); 
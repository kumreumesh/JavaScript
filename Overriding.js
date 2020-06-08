// method overriding
class Bank
{
   rateOfInterest()
   {
      return 0;
   }
}
class SBI extends Bank
{
	rateOfInterest()
   {
      return 10.5;
   }
}
class HDFC extends Bank
{
	rateOfInterest()
   {
      return 9.5;
   }
}

sbi=new SBI();
console.log("SBI Bank ROI :"+sbi.rateOfInterest());//10.5

hdfc=new HDFC();
console.log("HDFC Bank ROI :"+hdfc.rateOfInterest());//10.5




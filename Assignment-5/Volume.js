class Cylinder
{
   constructor(r,h)
   {
    this.r=r;
    this.h=h;
   }
   getvolume()
   {
        var a=3.14* this.r* this.r* this.h;
        return console.log(a);
   }
}
let obj=new Cylinder(5,7);
obj.getvolume();

class Sphere
{
   constructor(r)
   {
    this.r=r;
   }
   getvolume()
   {
        var a=4/3 * 3.14* this.r* this.r* this.r;
        return console.log(a);
   }
}
let obj1=new Sphere(5);
obj1.getvolume();

class Cone
{
   constructor(r,h)
   {
    this.r=r;
    
    this.h=h;
   }
   getvolume()
   {
        var a= (3.14* this.r* this.r* this.h)/3;
        return console.log(a);
   }
}
let obj2=new Cone(5,7);
obj2.getvolume();
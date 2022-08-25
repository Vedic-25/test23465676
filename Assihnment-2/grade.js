function Grade()
{
    let a =prompt("Enter your grade= ");
    switch(true)
    {
        case (100>a && a>90):
        {
            console.log("S grade ");
            break;
        }
        case(90>a && a>80):
        {
            console.log("A grade ");
            break;
        }
        
        case(80>a&& a>70):
        {
            console.log("B grade ");
            break;

        }
        
        case(70>a&& a>60):
        {
            console.log("C grade ");
            break;
        }
        
        case(60>a&& a>50):
        {
            console.log("D grade ");
            break;
        }
        
        case(50>a&& a>40):
        {
            console.log("E grade ");
            break;
        }
        
        case(40>a&& a>0):
        {
            console.log("Failed ");
            break;
        }
        default:
        {
            console.log("Invalid marks");
        }
    }
}
Grade();
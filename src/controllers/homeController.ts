import { Request, Response } from "express";
import Home from "./../home";

// - GET - /homes ## returns all homes
export let allHome = (req: Request, res: Response) => {
  let homes = Home.find((err: any, homes: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(homes);
    }
  });
};
// - GET - /home/1 ## returns a home with id 1
export let getHome = (req: Request, res: Response) => {
  Home.findById(req.params.id, (err: any, home: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(home);
    }
  });
};
// - POST - /home ## inserts a new home into the table
export let addHome = (req: Request, res: Response) => {
  let home = new Home(req.body);

  home.save((err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(home);
    }
  });
};
// - DELETE - /home/1 ## deletes a home with id of 1
export let delHome = (req: Request, res: Response) => {
    Home.deleteOne({_id: req.params.id},(err:any)=>{
        if(err){
            res.send(err)
        }else{
            res.send("Delete Success")
        }
    })
};
// - PUT - /home/1 ## updates a home with id of 1
export let updateHome = (req: Request, res: Response) => {
    Home.findByIdAndUpdate(req.params.id,req.body,(err:any,home:any)=>{
        if(err){
            res.send(err)
        }else{
            res.send("Update Success")
        }
    })
};

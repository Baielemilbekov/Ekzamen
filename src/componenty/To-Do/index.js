import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button} from "@mui/material";
import {TextField} from "@mui/material";

export default function ({user}) {
    console.log(user)
    const [toDo, setToDo] = useState();
    useEffect(() => {
        axios(`https://64340de21c5ed06c958dd2da.mockapi.io/users`)
            .then(({data}) => {
                setToDo(data)
                console.log(data)
            })
    }, [])
    return (
        <>
            <div>
                <div className="flex justify-center my-[40px]">
                    <TextField id="outlined-basic" label="Имия" variant="outlined" />
                    <TextField id="outlined-basic" label="Имия" variant="outlined"/>
                    <TextField id="outlined-basic" label="Возрасть" variant="outlined"/>

                    <Button variant="contained">Contained</Button>
                </div>
                <div
                    className="flex  my-[3px] text-[25px]  border-solid border-2   flex\">
                    <h1 className="ml-[100px]">Имия</h1>
                    <h1 className="ml-[23%]">Имия</h1>
                    <h1 className="ml-[23%]">Возрасть</h1>
                </div>
                <div className="text-[25px] h-[90px] w-[100%] h-[70px] ml-[40px]  flex justify-center items-center">

                    <div className="text-[25px]    w-[100%] h-[70px]   justify-center items-center">
                        {toDo?.map(item => (
                            <div className="flex items-center justify-between">
                                <div>
                                    <h5 className="ml-[50px]  border-b-2 w-[100%] ">{item?.name}</h5>
                                </div>

                                <div className="">
                                    <h5 className="ml-[50px]  border-b-2  border-l-none">{item?.experience}</h5>
                                </div>

                                <div className="">
                                    <h5 className="ml-[50px]  border-b-2 w-[100%]  ">{item.age}</h5>
                                </div>
                                <button
                                    className=" text-[red] border-solid border-2  py-[5px] px-[15px] rounded-[5px] bg-[#FF4821] text-white me-[10%]">Удалить
                                </button>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
            </div>
        </>

    );
};


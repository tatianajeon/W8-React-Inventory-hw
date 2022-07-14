import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { chooseClubType, chooseBrand, chooseColor, chooseDescription, chooseMaterial, choosePrice, chooseShaft } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';


interface GolfFormProps {
    id?:string;
    data?:{}
}

interface GolfState {
    name: string;
    price: string;
}

export const GolfForm = (props:GolfFormProps) => {

    const dispatch = useDispatch();
    let { golfData, getData } = useGetData();
    
    const store = useStore()
    const name = useSelector<GolfState>(state => state.name)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            await serverCalls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseClubType(data.club_type))
            dispatch(chooseBrand(data.brand))
            dispatch(choosePrice(data.price))
            dispatch(chooseDescription(data.description))
            dispatch(chooseShaft(data.shaft))
            dispatch(chooseMaterial(data.material))
            dispatch(chooseColor(data.color))
            await serverCalls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <Input {...register('name')} name="Club Type" placeholder='Hybrid'/>
                </div>
                <div>
                    <Input {...register('brand')} name="Brand" placeholder="Nike"/>
                </div>
                <div>
                    <Input {...register('price')} name="Price" placeholder="200.00"/>
                </div>
                <div>
                    <Input {...register('description')} name="Description" placeholder="like a 5 iron and a 7 wood"/>
                </div>
                <div>
                    <Input {...register('shaft')} name="Shaft" placeholder="Graphite"/>
                </div>
                <div>
                    <Input {...register('material')} name="material" placeholder="Mitsubishi"/>
                </div>
                <div>
                    <Input {...register('color')} name="color" placeholder="charcoal"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}
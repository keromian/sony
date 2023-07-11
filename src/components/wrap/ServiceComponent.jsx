import React from 'react';
import ServiceSection1 from './service/ServiceSection1';
import ServiceSection2 from './service/ServiceSection2';
import axios from 'axios';

export default function ServiceComponent(props) {

    const [data, setData] = React.useState(true);

    const onClickTrue =()=>{
        setData(true);
    }
    const onClickFalse =()=>{
        setData(false);
    }


    const [state, setState] = React.useState({
        FAQ: [],
        n:0
    });

    React.useEffect(()=>{
        axios({
            url:'./data/service/faq.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    FAQ:res.data.faq,
                    Notice:res.data.notice,
                    n:res.data.faq.length
                })
            }
        })
        .catch((err)=>{
            console.log(err)
        });
        
    },[]);

    
    return (
        <main id='main'>
            <ServiceSection1 onClickTrue={onClickTrue} onClickFalse={onClickFalse}/>
            <ServiceSection2 FAQ={state.FAQ} data={data} Notice={state.Notice}/>
        </main>
    );
}

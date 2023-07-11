import React from 'react';
import ServiceSection1 from './service/ServiceSection1';
import ServiceSection2 from './service/ServiceSection2';
import axios from 'axios';
import ViewComponent from './service/notice/ViewComponent';
import WriteComponent from './service/notice/WriteComponent';

export default function ServiceComponent(props) {

    const [data, setData] = React.useState('FAQ');

    const onClickMenu =(value)=>{
        setData(value);
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
            <ServiceSection1 data={data} onClickMenu={onClickMenu} />
            {(data==='공지사항' || data==='FAQ') && <ServiceSection2 FAQ={state.FAQ} data={data} Notice={state.Notice} setData={setData}/>}
            {data==='글보기' && <ViewComponent setData={setData}/>}
            {data==='글작성' && <WriteComponent setData={setData}/>}
            
        </main>
    );
}

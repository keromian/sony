import React from 'react';
import DetailSection1Component from './detail/DetailSection1Component';
import DetailSection2Component from './detail/DetailSection2Component';
import DetailSection3Component from './detail/DetailSection3Component';
import DetailSection4Component from './detail/DetailSection4Component';
import DetailSection5Component from './detail/DetailSection5Component';

export default function ProductDetailComponent({dkey}) {
    return (
        <main id='productDetail'>
            <DetailSection1Component  dkey={dkey}/>
            <DetailSection2Component/>
            <DetailSection3Component/>
            <DetailSection4Component/>
            <DetailSection5Component/>
        </main>
    );
}


import React from 'react'
import Image from 'next/image'

interface props{
    posts: string[];
}

export default function Product({posts}: props) {   
    return (
        <>
            <div className="container">
                <div className="row">   
                    { posts != '' && posts.data?.length != 'undefined' && posts.data.map((item, i) => (  
                        <div className="col-3 mt-4"> 
                            <div className="content">
                                <div className="product-wrapper">
                                    <div className="image">
                                        <Image
                                            src="/wp-1615073588970.jpg"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                            priority
                                        />
                                    </div>
                                    <div className="desctipion-title">
                                        <div className="descripion">
                                            {item.attributes.Desctiption}
                                        </div>
                                        <div className="title">
                                            {item.attributes.Name}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
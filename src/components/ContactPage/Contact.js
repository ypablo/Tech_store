import React from 'react'
import Title from '../Title'

export default function Contact() {
    return (
        <div className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="contact us"/>
                    <form className="mt-5" action="https://formspree.io/xggvogqx" method="POST">
                        <div className="form-group">
                            <input className="form-control" type="text" name="firstName" placeholder="name"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="email" name="email" placeholder="example@example.com"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" name="subject" placeholder="subject"/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" type="textarea" name="message" rows="10"/>
                        </div>
                        <div className="form-group mt-3">
                            <input className="form-control bg-primary text-white" type="submit" value="Send"/>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

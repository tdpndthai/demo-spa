import React, {Component} from 'react';

class Content extends Component {
    constructor(props){ //giúp nhận được props
        super(props);//bảo toàn lại cái hàm khai báo của lớp cha là Component
        this.state = {
            status:0
        }
    }

    notification=()=>{
        alert("handling interactive")
    }
    notification2=()=>{
        alert("handling interactive")
    }
    notification3=(x)=>{
        alert("handling interactive " + x)
    }

    renderButton=()=>{
        return(
            <div className="row">
                <div className="btn btn-group">
                    <div className="btn btn-info" onClick={()=>this.editClick()}>Edit</div>
                    <div className="btn btn-warning" onClick={this.notification2}>Del</div>
                    {/*<div className="btn btn-primary" onClick={()=>this.notification3("avbc")}>Test</div>*/}
                </div>
            </div>
        )

    }
    renderForm=()=>(
        <div className="row">
            <div className="from-group">
                {/*trunggian ko phải biến state*/}
                <input ref={(dulieunhap)=>{this.trunggian=dulieunhap}} defaultValue={this.props.tieude} type="text" name="name" className="form-control"/>
                <div className="btn btn-success" onClick={()=>this.saveClick()}>Save</div>
            </div>
        </div>
    )

    displayCheck=()=>{
        if (this.state.status === 0){
            return this.renderButton();
        }else {
            return  this.renderForm();
        }
    }
    editClick = () => {
        this.setState(
            {
                status:1
            }
        );  //code snippet sst
    }
    saveClick = () => {
        this.setState(
            {
                status:0
            }
        );  //code snippet sst
        console.log(this.trunggian.value)
    }

    render() {
        return (
            <div className="col-lg-4">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="p-1">
                            <img className="img-fluid rounded-circle" src={"img/"+this.props.anh+".jpg"} alt="" />
                        </div>
                    </div>
                    <div className={"col-lg-5 " + this.props.vitri2}>
                        <div className="p-1">
                            <h2 className="display-6">{this.props.tieude}</h2>
                            <p>Đây là tiêu đề</p>
                        </div>
                        {this.displayCheck()}

                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
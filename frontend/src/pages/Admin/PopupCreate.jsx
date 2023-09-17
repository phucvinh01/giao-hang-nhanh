import React, { useState, useId } from 'react';
import { Input, Modal, Row, Col, Select, Upload } from 'antd';
import { useNavigate } from 'react-router-dom'
const PopupCreate = () => {
    const navigate = useNavigate()
    const { TextArea } = Input;
    const id = useId();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imageUrl, setImageUrl] = useState()
    const [loading, setLoading] = useState(false);
    const uploadButton = (
        <div>
            { loading ? <i className="fa-solid fa-spinner fa-spin-pulse"></i> : <i className="fa-solid fa-plus"></i> }
            <div
                style={ {
                    marginTop: 8,
                } }
            >
                Upload
            </div>
        </div>
    );
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <button className='btn btn-info' onClick={ showModal }>
                <i class='fa-solid fa-circle-plus'></i>
                <em className='mx-1'>Create</em>
            </button>
            <Modal width={ 800 } title="Create" open={ isModalOpen } footer={ null } onOk={ handleOk } onCancel={ handleCancel }>
                <hr></hr>
                <Row justify={ 'space-around' }>
                    <Col span={ 7 }>
                        <div className="mb-3">
                            <label htmlFor={ id + '-name' } className="form-label fw-bolder">Name</label>
                            <input type="text" className="form-control" id={ id + '-name' } ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor={ id + '-price' } className="form-label fw-bolder">Price</label>
                            <input type="number" className="form-control" id={ id + '-price' } ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor={ id + '-category' } className="form-label fw-bolder">Category</label>
                            <Select
                                id='category'
                                defaultValue="lucy"
                                style={ {
                                    width: '100%',
                                } }
                                allowClear
                                options={ [
                                    {
                                        value: 'lucy',
                                        label: 'Lucy',
                                    },
                                ] }
                            />
                        </div>

                    </Col>
                    <Col span={ 7 }>
                        <div className="mb-3">
                            <label htmlFor={ id + '-brand' } className="form-label fw-bolder">Brand</label>
                            <input type="text" className="form-control" id={ id + '-brand' } ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor={ id + '-description' } className="form-label fw-bolder">Description</label>
                            <TextArea style={ {
                                height: 120,
                                resize: 'none',
                            } } type="text" className="form-control" id={ id + '-description' } ></TextArea>
                        </div>
                    </Col>
                    <Col span={ 7 }>
                        <div className="mb-3">
                            <Upload

                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={ false }
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            >
                                { imageUrl ? (
                                    <img
                                        src={ imageUrl }
                                        alt="avatar"
                                        style={ {
                                            width: '100%',
                                        } }
                                    />
                                ) : (
                                    uploadButton
                                ) }
                            </Upload>
                        </div>
                    </Col>
                </Row>
            </Modal>
        </>
    );
};
export default PopupCreate;
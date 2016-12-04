import React  from 'react';

//import Modal from nui-widgets
import {Modal, Button, MessageBar} from '@concur/nui-widgets';

import {browserHistory} from 'react-router';

import {FormattedMessage} from '@concur/nui-intl';

import config from '../config';

export default React.createClass({


    render() {

        let {addLocation, status} = this.props;

        return (

            <Modal
                onHide={() => {}}
                show>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <FormattedMessage id="locations.links.AddLocation" />
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <FormattedMessage id="locations.fieldLabels.Country"/>:
                            <input type="text" ref="country" defaultValue="Germany"/>
                            {' '}
                        <FormattedMessage id="locations.fieldLabels.City"/>:
                            <input type="text" defaultValue="Berlin" ref="city" />
                            {' '}
                        <FormattedMessage id="locations.fieldLabels.numEmployees"/>:
                            <input type="number" defaultValue="1" ref="numEmployees" />
                            {' '}

                        {(status == "adding" || status === 'added') && (
                            <div>
                                <br />
                                <FormattedMessage id={`locations._dynamic.status.${status}`}/>
                            </div>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => (
                            addLocation({
                                city: this.refs.city.value,
                                country: this.refs.country.value,
                                numEmployees: parseInt(this.refs.numEmployees.value)
                            })
                        )}>
                            <FormattedMessage id="locations.buttons.Add" />
                        </Button>

                        <Button onClick={() => {
                            browserHistory.push(`${config.nui.baseUrl}/`);
                        }}>
                            <FormattedMessage id="locations.buttons.Close" />
                        </Button>
                    </Modal.Footer>
                </Modal>
        )}
});

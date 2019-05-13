import React from 'react';
import {observer} from 'mobx-react';
import Navigation from '../partials/Navigation';
import strings from '../Strings';

@observer
class IndexView extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <h1 className="app__title">{strings.HEADING_FRONTPAGE}</h1>
                <p>{strings.FRONTPAGE_DESCRIPTION}</p>
            </div>
        );
    }
}

export default IndexView;

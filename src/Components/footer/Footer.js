import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                {/* Footer */}
                <footer className="py-5 bg-black">
                    <div className="container">
                        <p className="m-0 text-center text-white small">Copyright © Your Website 2019</p>
                    </div>
                    {/* /.container */}
                </footer>
            </div>
        );
    }
}

export default Footer;
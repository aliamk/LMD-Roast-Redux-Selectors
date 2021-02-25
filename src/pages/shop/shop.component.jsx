
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils.js';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

// =============================================================================================

/* THIS FILE CREATES THE /3000 HOMEPAGE.  COLLECTION DATA IS POPULATED HERE (ALL 5 COLLECTIONS ITEMS) */

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

// Modified for Redux-Thunk
const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage)


/* REPLACED THIS WITH THE CLASS ShopPage COMPONENT ABOVE AFTER DYNAMICALLY TRANSFERRING
THE SHOP_DATA TO FIREBASE.
const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${ match.path }`} component={CollectionsOverview} />
    <Route path={`${ match.path }/:collectionId`} component={CollectionPage}/>
  </div>
)*/

  // Modified for Redux-Thunk - NO LONGER NEED MAPSTATETOPROPS
/*const mapStateToProps = createStructuredSelector({
  isFetchingCollections: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
})

/* ROUTING / NAVIGATION
1 - The first ROUTE goes to the Collections Overview component - this is the HOMEPAGE
2 - The second ROUTE: Nested Routing: we want to only populate the categories page with
the items that the user has clicked on i.e., only return hats when clicking hats
- To do this, we want to access the URL, specifically the string after shop
- If it says shop/jackets, we want the category page to be populated by only items
within the jackets data so we use: path={`${ match.path }/:collectionId`}
*/
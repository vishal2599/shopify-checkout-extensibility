import {
  useCartLines,
  Text,
  Banner,
  reactExtension,
  useSettings,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension('purchase.checkout.block.render', () => <Extension />);

function Extension() {
  const settings = useSettings();
  const cartLines = useCartLines();

  const productId = settings.product_id;
  const bannerMessage = settings.banner_message;
  const bannerInfo = settings.banner_message_info;

  const productInCart = cartLines.some(line => line.merchandise.product.id === 'gid://shopify/Product/' + productId);

  if (productInCart) {
    console.log('Product is in cart');
  }

  return (<>
    {productInCart ? (
      <Banner status='success'>
        <Text>
          {bannerMessage}
        </Text>
      </Banner>
    ) : null}

    {bannerInfo ? (
      <Banner status='info'>
        <Text>
          {bannerInfo}
        </Text>
      </Banner>
    ) : null}
  </>
  );
}

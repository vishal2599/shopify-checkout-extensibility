import {
  useCartLines,
  Text,
  Banner,
  reactExtension,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension('purchase.checkout.block.render', () => <Extension />);

function Extension() {
  const cartLines = useCartLines();

  const productId = '7079695384657';
  const productInCart = cartLines.some(line => line.merchandise.id === productId);

  return (
    <Banner status={productInCart ? 'success' : 'critical'}>
      <Text>
        {productInCart ? 'Your selected product is in the cart!' : 'Your selected product is not in your cart.'}
      </Text>
    </Banner>
  );
}

import { discountSignature, ratingSignature } from '../classes/FullProduct';
import { priceSignature } from '../classes/Product';
import { fetchSingleProductSuccess } from '../ducks/products';
import FullProduct from '../classes/FullProduct';

export class ProductsHelper {
  static fullProductFactory(product) {
    const rating = {...ratingSignature};
    rating.quantity = product.Avaliacao.Quantidade;
    rating.stars = product.Avaliacao.Estrelas;

    const pricing = {...priceSignature};
    pricing.from = product.Preco.De;
    pricing.value = product.Preco.Por;
    pricing.installment = product.Preco.Parcelamento;
    pricing.byParcel = product.Preco.PorParcela;

    pricing.discounts = product.Preco.DescontoPagamento.map(item => {

      const discount = {...discountSignature};

      discount.active = item.FlagAtivo;
      discount.icon = item.Ico;
      discount.name = item.Nome;
      discount.description = item.Descricao;
      discount.value = item.Por;
      discount.installment = item.Parcelamento;
      discount.percentage = item.PercentualDesconto;

      return discount;
    });

    return new FullProduct(
        product.IdProduto,
        product.CodigoItem,
        product.Nome,
        rating,
        product.Imagens,
        pricing
      );
  }
}

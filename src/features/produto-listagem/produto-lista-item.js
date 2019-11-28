import React from 'react'
import AddBtn from './add-btn'
import RemoveBtn from './remove-btn'

export default function ProdutoListaItem(props) {
    return <div className='produto-lista-item'>
        <div className='produto-lista-item-todos'>
            <h3>{ props.produto.titulo }</h3>
            <img
                height={170}
                title={ props.produto.titulo }
                src={`/produtos/${props.produto.img}`}
            />
            
            <div><i><b>Autor: </b></i>{ props.produto.autor }</div>
            <div><i><b>Descricao: </b></i>{ props.produto.descricao }</div>
            <div><i><b>Taxa: </b></i>{ props.produto.taxa }</div>
            <div><i><b>Valor($): </b></i>{ props.produto.valor }</div>
        </div>
       
        <div>
            <AddBtn 
                carrinhoItem={props.carrinhoItem} 
                produto={props.produto} 
                addToCarrinho={props.addToCarrinho}
            />

            {
                props.carrinhoItem
                    ? <RemoveBtn 
                    carrinhoItem={props.carrinhoItem} 
                    produto={props.produto} 
                    removeFromCarrinho={props.removeFromCarrinho}
                />
                : null
            }
        </div>
    </div>
}
import React, {useState} from 'react';
import { AuthHeader } from '../../components/AuthHeader';
import { setupAPIClient } from "../../services/api";
import { canSSRAuth } from '../../utils/canSSRAuth';
import * as S from './style';

import {FiSearch, FiEdit, FiTrash2} from 'react-icons/fi'
import Link from 'next/link';
import { toast } from 'react-toastify';

interface IBrokerData{
	id: string,
	name: string,
	email: string,
	whatsapp: string,
	status: boolean,
	phone: string | null,
}

interface IHouseData{
	id: string,
	title: string,
	price: number,
	area: string,
	bedroom: string,
	type: string,
	status: string,
	file: string
	description: string,
	address: string,
	broker_id: string,
}

interface IRequestProps{
	brokers: IBrokerData[],
	houses: IHouseData[]
}

export default function Dashboard({brokers, houses}: IRequestProps) {
	const [listHouses, setListHouses] = useState(houses);
	const [listBrokers, setListBrokers] = useState(brokers);
	const [searchBroker, setSearchBroker] = useState('');
	const [searchHouse, setSearchHouse] = useState('');


	
	async function handleDeleteBroker(id: string){
		try{
			const apiClient = setupAPIClient();
		
			await apiClient.delete('broker/delete', {
				params:{
					id: id,
				}
			})
	
			const filterBroker = listBrokers.filter(item => {
				return (item?.id !== id)
			})
	
			setListBrokers(filterBroker)
			toast.success('Corretor deletado com sucesso.')
		} catch(err) {
			toast.error('Ocorreu um erro ao deletar o corretor!')
		}
	}

	async function handleDeleteHouse(id: string){
		try{
			const apiClient = setupAPIClient();
		
			await apiClient.delete('delete/house', {
				params:{
					id: id,
				}
			})

			const filterHouse = listHouses.filter(item => {
				return (item?.id !== id)
			})
	
			setListHouses(filterHouse)
			toast.success('Imóvel deletado com sucesso.')
		} catch(err) {
			toast.error('Ocorreu um erro ao deletar o imóvel!')
		}
	}

	async function handleSearchBroker(){
		try{
			const apiClient = setupAPIClient();

			const response = await apiClient.get('/broker/search', {
				params:{
					name: searchBroker
				}
			})

			setListBrokers(response.data)

		} catch(err){
			console.log(err)
		}
	}

	async function handleSearchHouse(){
		try{
			const apiClient = setupAPIClient();

			const response = await apiClient.get('/search/house', {
				params:{
					title: searchHouse
				}
			})

			setListHouses(response.data)
			
		} catch(err){
			console.log(err)
		}

	}

	return (
		<>
			<AuthHeader />
			<S.Container>
				<S.Wrapper>
					<S.PropsDiv>
							<div className='GapColumn'>
								<div>
									<h2>Imóveis Cadastrados</h2>
								</div>
								<S.SearchDiv>
									<input type="text" placeholder='Pesquisar...' value={searchHouse} onChange={(e) => setSearchHouse(e.target.value)}/>
									<button onClick={handleSearchHouse}>
										<FiSearch color="#660000"/>
									</button>
								</S.SearchDiv>
								{
									listHouses.map((item, index) => {
										return(
											<S.DivBroker key={item.id}>
												<p>{item.title}</p>
												<div>
													<Link href={`/imoveis/${item.id}`}>
														<FiEdit size={20} color="#660000"/>
													</Link>
													<Link href="#" onClick={() => handleDeleteHouse(item.id)}>
														<FiTrash2 size={20} color="#660000"/>
													</Link	>
												</div>
											</S.DivBroker>
										)
									})
								}
							</div>

						<div className='GapColumn'>
							<div>
								<h2>Corretores Cadastrados</h2>
							</div>
							<S.SearchDiv>
								<input type="text" placeholder='Pesquisar...' value={searchBroker} onChange={(e) => setSearchBroker(e.target.value)}/>
								<button onClick={handleSearchBroker}>
									<FiSearch color="#660000"/>
								</button>
							</S.SearchDiv>
							{
								listBrokers.map((item, index) => {
									return(
										<S.DivBroker key={item.id} style={item.status ? {backgroundColor: '#fff'} : {backgroundColor: '#660000', color: '#fff', opacity: 0.5}}>
											<p>{item.name}</p>
											<div>
												<Link href={`/corretores/${item.id}`}>
													<FiEdit size={20} color={item.status ? "#660000" : "#fff"}/>
												</Link>
												<Link href="#" onClick={() => handleDeleteBroker(item.id)}>
													<FiTrash2 size={20} color={item.status ? "#660000" : "#fff"}/>
												</Link>
											</div>
										</S.DivBroker>
									)
								})
							}
						</div>
					</S.PropsDiv>
				</S.Wrapper>
			</S.Container>
		</>
	)
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
	const apiClient = setupAPIClient(ctx)
	const response = await apiClient.get('/broker');
	const responseHouse = await apiClient.get('houses');
	return{
		props:{
			brokers:response.data,
			houses: responseHouse.data,
		}
	}
})
import type {NextApiRequest, NextApiResponse, NextApiHandler} from 'next';
import type {RespostaPadraoMsg} from '../types/RespostaPadraoMsg';

export const validarTokenJWT = (handler : NextApiHandler) =>
	(req : NextApiRequest, res : NextApiResponse<RespostaPadraoMsg>) => {
		const {MINHA_CHAVE_JWT} = process.env;
		if(!MINHA_CHAVE_JWT){
			return res.status(500).json({erro : 'ENV chave JWT não informada na execução do projeto!'});
		}
		if(!req || !req.headers){
			return res.status(401).json({error : 'Não foi possível validar o token de acesso!'});
		}
		if(req.method !== 'OPTIONS'){
			const authorization = req.headers['authorization'];
			if(!authorization){
			return res.status(401).json({error : 'Não foi possível validar o token de acesso!'});
			}
		}
	}
import usuarios from './usuarios'


class Usuario {

    NOME!: string;
    CPF!: string;
    CONTA!: string;
    AGENCIA!: string;
    SENHA!: string;
    SALDO!: number;

    constructor(nome: string, cpf: string, conta: string, agencia: string, senha: string, saldo: number) {
        this.NOME = nome;
        this.CPF = cpf;
        this.CONTA = conta;
        this.AGENCIA = agencia;
        this.SENHA = senha;
        this.SALDO = saldo;
    }

/*      saldo(){

    }

    transferir(){

    } */

    cadastro(req: any, res: any) {
        let user = new usuarios();
        user.nome = this.NOME;
        user.cpf = this.CPF;
        user.conta = this.CONTA;
        user.agencia = this.AGENCIA;
        user.senha = this.SENHA;
        user.saldo = this.SALDO;

        user.save((err: any) => {
        })

        res.redirect("/lista")

    }

}

export default Usuario
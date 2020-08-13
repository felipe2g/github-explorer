import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
      <>
        <img src={logoImg} alt="Logo Github Explorer" />
        <Title>Explore repositórios no GitHub</Title>

        <Form>
          <input placeholder="Digite o nome do repositório" />
          <button type="submit">Pesquisar</button>
        </Form>

        <Repositories>
          <a href="teste">
            <img src="https://avatars0.githubusercontent.com/u/54296382?s=460&u=878df69a7d6134f4a7100fb85392e7516d0d6cbb&v=4" alt="Felipe Guimarães"/>
          
            <div>
              <strong>felipe2g/e-commerce-price-checker</strong>
              <p>Check our prices with us!</p>
            </div>

            <FiChevronRight size={20} />
          </a>
          <a href="teste">
            <img src="https://avatars0.githubusercontent.com/u/54296382?s=460&u=878df69a7d6134f4a7100fb85392e7516d0d6cbb&v=4" alt="Felipe Guimarães"/>
          
            <div>
              <strong>felipe2g/e-commerce-price-checker</strong>
              <p>Check our prices with us!</p>
            </div>

            <FiChevronRight size={20} />
          </a>
          <a href="teste">
            <img src="https://avatars0.githubusercontent.com/u/54296382?s=460&u=878df69a7d6134f4a7100fb85392e7516d0d6cbb&v=4" alt="Felipe Guimarães"/>
          
            <div>
              <strong>felipe2g/e-commerce-price-checker</strong>
              <p>Check our prices with us!</p>
            </div>

            <FiChevronRight size={20} />
          </a>
          <a href="teste">
            <img src="https://avatars0.githubusercontent.com/u/54296382?s=460&u=878df69a7d6134f4a7100fb85392e7516d0d6cbb&v=4" alt="Felipe Guimarães"/>
          
            <div>
              <strong>felipe2g/e-commerce-price-checker</strong>
              <p>Check our prices with us!</p>
            </div>

            <FiChevronRight size={20} />
          </a>
          
        </Repositories>

      </>
    );
};

export default Dashboard;
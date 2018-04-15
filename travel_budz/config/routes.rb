Rails.application.routes.draw do
  post '/api/user_token' => 'user_token#create'
  resources :users
  post '/api/user' => 'users#create'
  get 'api/trips' => 'trips#index'
  get '/trips/search' => 'trips#search'
  get '/api/trips/search' => 'trips#getData'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/api/comments/:id' => 'comments#index'
  resources :trips, path: "api/trips"
  resources :comments, path: "api/comments"
end

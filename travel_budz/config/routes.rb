Rails.application.routes.draw do
  post '/api/user_token' => 'user_token#create'
  resources :users
  post '/api/user' => 'users#create'
  get '/trips/search' => 'trips#search'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get 'api/trips', to: 'trips#index'
  resources :trips, path: "api/trips"
  resources :comments, path: "api/comments"
end
